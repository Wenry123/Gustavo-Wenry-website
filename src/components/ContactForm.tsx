import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    business: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Olá Gustavo, acabei de visitar seu site e quero uma Landing Page!
Meu nome é ${formData.name}, meu número é ${formData.whatsapp}, sou do nicho ${formData.business} e estou buscando ${formData.needs}.`;

    const whatsappUrl = `https://wa.me/5515981479735?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    toast({
      title: "Redirecionando para WhatsApp! 🚀",
      description:
        "Seus dados foram enviados. Continue a conversa no WhatsApp.",
    });

    // Note: Email sending requires backend setup with Lovable Cloud
    // This would be implemented via an edge function
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                começar?
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              Preencha o formulário e vamos conversar sobre seu projeto
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border animate-fade-in p-4 sm:p-6 md:p-8">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Fale comigo agora
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Envie seus dados e continue a conversa diretamente no WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5 md:space-y-6"
              >
                {/* Nome */}
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(15) 98147-9735"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                {/* E-mail */}
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                {/* Nicho */}
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="business">Nicho ou tipo de negócio *</Label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Ex: Arquitetura, Coach, Dentista..."
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                {/* Necessidade */}
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="needs">O que você precisa? *</Label>
                  <Textarea
                    id="needs"
                    name="needs"
                    placeholder="Landing Page, site completo, reformulação..."
                    required
                    value={formData.needs}
                    onChange={handleChange}
                    className="bg-background/50 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]"
                  />
                </div>

                {/* Botão maior e responsivo */}
                <Button
                  type="submit"
                  className="
                w-full 
                max-w-full md:max-w-lg 
                bg-primary 
                hover:bg-primary/90 
                shadow-neon-blue 
                text-base sm:text-lg md:text-xl lg:text-2xl
                py-3 sm:py-4 md:py-5 
                px-6 sm:px-8 md:px-10 lg:px-12
                flex items-center justify-center gap-3
                break-words
                rounded-lg
              "
                  size="lg"
                >
                  Enviar dados para Gustavo 🚀
                  <Send className="w-5 h-5 md:w-6 md:h-6" />
                </Button>

                {/* Observação */}
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para
                  continuar a conversa
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
