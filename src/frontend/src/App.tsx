import { RouterProvider, createRouter, createRoute, createRootRoute, redirect } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import ImpactPage from './pages/ImpactPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Root route with Layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Define routes - About is now the default landing page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const impactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact',
  component: ImpactPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/case-studies',
  component: CaseStudiesPage,
});

// Redirect /certifications to /about
const certificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/certifications',
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  servicesRoute,
  impactRoute,
  aboutRoute,
  caseStudiesRoute,
  certificationsRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
