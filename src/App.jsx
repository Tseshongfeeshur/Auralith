import { TitleProvider, useAppTitle } from './TitleContext.jsx';

export default function App() {
  return (
    <TitleProvider>
      <AppLayout />
    </TitleProvider>
  );
}