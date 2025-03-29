import GoogleLogin from '@/components/GoogleLogin';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">🚀 AI Seller Automation Tool</h1>
      <GoogleLogin />
    </main>
  );
}