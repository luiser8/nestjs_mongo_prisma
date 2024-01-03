import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerInit = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Nest Mongo Prisma')
    .setDescription('API With Mongodb')
    .setVersion('1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/', app, document, {
    customCssUrl:
      'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.1/themes/3.x/theme-flattop.css',
    customfavIcon:
      'https://www.achs.cl/portal/portal/_layouts/ACHS.Internet.Branding/img/favicon.ico',
    customSiteTitle: 'Nest Mongo Prisma',
    swaggerOptions: {
      persistAuthorization: true,
      tryItOutEnabled: true,
      displayRequestDuration: true,
    },
  });
};
