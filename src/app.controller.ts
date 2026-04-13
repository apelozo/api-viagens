import { Controller, Get, Query } from '@nestjs/common';

@Controller('api')
export class AppController {
  
  // NOVA ROTA PARA BUSCAR NO GOOGLE PLACES
  @Get('places/search')
  async searchPlaces(@Query('query') query: string) {
    if (!query) return [];

    // COLOQUE SUA CHAVE DO GOOGLE AQUI NO BACKEND
    const apiKey = 'AIzaSyC2dCwe_w6dzGXXIH72OaX6uYky_kYgNKU'; 
    
    // Monta a URL do Google
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}&language=pt-BR`;

    try {
      // Faz a requisição para o Google (O Node.js não tem bloqueio de CORS!)
      const response = await fetch(url);
      const data = await response.json();
      
      // Devolve os resultados para o Flutter
      return data.results || [];
    } catch (error) {
      console.error('Erro ao buscar no Google:', error);
      return [];
    }
  }
}