import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, User, Building, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics-events';
import { GlassCard } from '@/components/modern/GlassCard';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  initialData?: Partial<FormData>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialData }) => {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  const [formData, setFormData] = useState<FormData>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    company: initialData?.company || '',
    service: initialData?.service || '',
    budget: initialData?.budget || '',
    timeline: initialData?.timeline || '',
    message: initialData?.message || ''
  });

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Email inválido' : '';
      case 'phone':
        const phoneRegex = /^[\d\s\(\)\+\-]{10,}$/;
        return value && !phoneRegex.test(value) ? 'Telefone inválido' : '';
      case 'message':
        return value.length < 10 ? 'Mensagem deve ter pelo menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key as keyof FormData, value);
      if (error) newErrors[key as keyof FormData] = error;
    });

    // Campos obrigatórios
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.message) newErrors.message = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Erro no formulário',
        description: 'Por favor, corrija os campos destacados.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Envio padrão para FormSubmit
        const form = e.target as HTMLFormElement;
        const formDataObj = new FormData(form);
        
        const response = await fetch('https://formsubmit.co/contato@digitalfusion.com.br', {
          method: 'POST',
          body: formDataObj
        });
        
        if (!response.ok) throw new Error('Erro no envio');
      }
      
      setIsSuccess(true);
      
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      
      trackEvent({
        action: ANALYTICS_EVENTS.CONTACT.SUBMIT,
        category: 'Contact Form',
        label: 'Form Submit Success',
      });
      
      // Reset form após 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 3000);
      
    } catch (error) {
      toast({
        title: 'Erro no envio',
        description: 'Tente novamente ou entre em contato via WhatsApp.',
        variant: 'destructive'
      });
      
      trackEvent({
        action: 'form_error',
        category: 'Contact Form',
        label: 'Form Submit Error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const progressPercentage = Math.round(
    (Object.values(formData).filter(value => value.trim() !== '').length / Object.keys(formData).length) * 100
  );

  if (isSuccess) {
    return (
      <GlassCard className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
          <p className="text-gray-300">Obrigado pelo contato. Retornaremos em breve!</p>
        </motion.div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Progresso do formulário</span>
          <span className="text-sm text-cyan-400 font-medium">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome e Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
            <Label htmlFor="name" className="text-white flex items-center gap-2">
              <User className="w-4 h-4" />
              Nome *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 ${
                errors.name ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="Seu nome completo"
            />
            {errors.name && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
            <Label htmlFor="email" className="text-white flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 ${
                errors.email ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </motion.div>
        </div>

        {/* Telefone e Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
            <Label htmlFor="phone" className="text-white flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Telefone
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 ${
                errors.phone ? 'border-red-500 focus:border-red-500' : ''
              }`}
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
            <Label htmlFor="company" className="text-white flex items-center gap-2">
              <Building className="w-4 h-4" />
              Empresa
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
              placeholder="Nome da sua empresa"
            />
          </motion.div>
        </div>

        {/* Serviço e Orçamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-white">Serviço de Interesse</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
              <SelectTrigger className="bg-black/20 border-gray-600 text-white focus:border-cyan-400">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                <SelectItem value="desenvolvimento-web">Desenvolvimento Web</SelectItem>
                <SelectItem value="aplicativos-mobile">Aplicativos Mobile</SelectItem>
                <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                <SelectItem value="trafego-pago">Tráfego Pago</SelectItem>
                <SelectItem value="consultoria">Consultoria</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Orçamento Estimado</Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="bg-black/20 border-gray-600 text-white focus:border-cyan-400">
                <SelectValue placeholder="Faixa de investimento" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-600">
                <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                <SelectItem value="15k-30k">R$ 15.000 - R$ 30.000</SelectItem>
                <SelectItem value="30k-50k">R$ 30.000 - R$ 50.000</SelectItem>
                <SelectItem value="acima-50k">Acima de R$ 50.000</SelectItem>
                <SelectItem value="a-definir">A definir</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <Label className="text-white">Prazo Desejado</Label>
          <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
            <SelectTrigger className="bg-black/20 border-gray-600 text-white focus:border-cyan-400">
              <SelectValue placeholder="Quando precisa ficar pronto?" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-600">
              <SelectItem value="urgente">Urgente (até 2 semanas)</SelectItem>
              <SelectItem value="1-mes">1 mês</SelectItem>
              <SelectItem value="2-3-meses">2-3 meses</SelectItem>
              <SelectItem value="3-6-meses">3-6 meses</SelectItem>
              <SelectItem value="flexivel">Flexível</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mensagem */}
        <motion.div variants={inputVariants} whileFocus="focus" className="space-y-2">
          <Label htmlFor="message" className="text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Mensagem *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`bg-black/20 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 min-h-[120px] ${
              errors.message ? 'border-red-500 focus:border-red-500' : ''
            }`}
            placeholder="Conte-nos mais sobre seu projeto, objetivos e necessidades específicas..."
          />
          {errors.message && (
            <p className="text-red-400 text-sm flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </div>
            )}
          </Button>
        </motion.div>
      </form>
    </GlassCard>
  );
};

export default ContactForm;