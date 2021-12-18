import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { KeycloakService, Public } from "nestjs-keycloak-admin";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly keycloak: KeycloakService
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("users")
  async getUsers(@Req() req: Request) {
    const token = req.headers.authorization.split(" ")[1];
    this.keycloak.client.setAccessToken(token);
    return await this.keycloak.client.users.find();
  }
}
