import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "Zarplatka API",
    version: "1.0.0",
    endpoints: [
      { path: "/", description: "Главная страница со статистикой зарплат" },
      { path: "/api", description: "Этот endpoint — информация о сервисе" },
    ],
    features: [
      "Средние зарплаты по странам мира",
      "Рейтинги регионов России",
      "Зарплаты по профессиям и отраслям",
      "Динамика зарплат за 9 лет",
      "Коэффициент Джини по странам",
    ],
  });
}