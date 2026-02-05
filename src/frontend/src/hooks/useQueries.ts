import { useActor } from './useActor';

// This file is kept for future backend integrations
// Currently, the application uses client-side solutions:
// - Contact form uses FormSubmit.co (no backend needed)
// - CV download uses static assets (no backend needed)
// - Favicons use static assets (no backend needed)

// Placeholder hook structure for future use
export function useBackendReady() {
  const { actor, isFetching } = useActor();
  
  return {
    isReady: !!actor && !isFetching,
    actor,
  };
}

