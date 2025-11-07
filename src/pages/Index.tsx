import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">MasterSolis IntelliDynamics</h1>
          <p className="text-muted-foreground mt-2">Intelligent Solutions for Modern Challenges</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <ContactForm />
      </main>
      
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 MasterSolis IntelliDynamics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
