# Documentação do Google Analytics

## Visão Geral
Este documento descreve a implementação do Google Analytics 4 (GA4) no projeto Digital Fusion.

## Eventos Disponíveis

### Projetos
- `view_project`: Visualização de projeto
  - Parâmetros: projectId, projectName
- `click_project`: Clique em projeto
  - Parâmetros: projectId, projectName
- `share_project`: Compartilhamento de projeto
  - Parâmetros: projectId, projectName, platform

### Formulário de Contato
- `submit_contact`: Envio de formulário
  - Parâmetros: formType
- `contact_success`: Sucesso no envio
  - Parâmetros: formType
- `contact_error`: Erro no envio
  - Parâmetros: formType, errorCode

### Navegação
- `click_external_link`: Clique em link externo
  - Parâmetros: url, label
- `click_internal_link`: Clique em link interno
  - Parâmetros: path, label

## Como Usar

### Hook useAnalytics

```typescript
import { useAnalytics } from '../hooks/useAnalytics';

const { trackEvent, trackProjectView } = useAnalytics();

// Rastrear evento personalizado
trackEvent({
  action: 'custom_action',
  category: 'Custom Category',
  label: 'Custom Label'
});

// Rastrear visualização de projeto
trackProjectView('project-id', 'Project Name');
```

### Constantes de Eventos

```typescript
import { ANALYTICS_EVENTS } from '../lib/analytics-events';

// Usar constantes para evitar erros de digitação
trackEvent({
  action: ANALYTICS_EVENTS.PROJECT.VIEW,
  category: 'Project',
  label: 'Project Name'
});
```

## Boas Práticas

1. **Consistência**
   - Use as constantes definidas em `analytics-events.ts`
   - Mantenha um padrão consistente para nomes de eventos

2. **Dados**
   - Inclua apenas dados necessários
   - Evite dados sensíveis
   - Use labels descritivos

3. **Performance**
   - Não rastreie eventos desnecessários
   - Evite rastreamento em loops
   - Use debounce para eventos frequentes

4. **Debug**
   - Use o modo de depuração do GA4
   - Verifique o console para erros
   - Teste em diferentes ambientes

## Ambiente de Desenvolvimento

Para testar o GA4 em desenvolvimento:

1. Abra o console do navegador
2. Verifique se o script está carregando
3. Use o modo de depuração do GA4
4. Verifique os eventos em tempo real

## Suporte

Para questões relacionadas ao Google Analytics:

1. Consulte a [documentação oficial do GA4](https://developers.google.com/analytics)
2. Verifique os logs no console do navegador
3. Entre em contato com a equipe de desenvolvimento 