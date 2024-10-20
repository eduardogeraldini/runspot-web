"use client";

import Image from "next/image"
import React from "react";
import { Container } from "./Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Placeholder data for races
const races = [
  {
    id: 1,
    title: "City Marathon 2024",
    date: "2024-05-15",
    location: "New York City, NY",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/730-331096.jpeg'
  },
  {
    id: 2,
    title: "Sunset 5K Run",
    date: "2024-06-22",
    location: "Los Angeles, CA",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/712-703918.png'
  },
  {
    id: 3,
    title: "Autumn Trail Race",
    date: "2024-10-08",
    location: "Portland, OR",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/738-880639.jpeg'
  },
  {
    id: 4,
    title: "Winter Wonderland 10K",
    date: "2024-12-01",
    location: "Denver, CO",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/717-575337.jpeg'
  },
  {
    id: 5,
    title: "Spring Blossom Half Marathon",
    date: "2025-04-05",
    location: "Washington D.C.",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/741-716363.png'
  },
  {
    id: 6,
    title: "Beachside Fun Run",
    date: "2025-07-12",
    location: "Miami, FL",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/699-326050.jpeg'
  },
  {
    id: 7,
    title: "Beachside Fun Run",
    date: "2025-07-12",
    location: "Miami, FL",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/742-586927.jpeg'
  },
  {
    id: 8,
    title: "Beachside Fun Run",
    date: "2025-07-12",
    location: "Miami, FL",
    image: 'https://www.corridaderuasuperacao.com.br/eventos/740-429765.jpeg'
  }
];

export const Cards = () => {
  return (
    <Container className="!p-0">

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="titulo">Título</Label>
          <Input id="titulo" placeholder="Corrida 5k" />
        </div>

        <div className="grid items-center gap-1.5">
          <Label htmlFor="cidade">Cidade</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid items-center gap-1.5">
          <Label htmlFor="cidade">Estado</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="md:mt-5">
          <Button className="w-full text-white bg-indigo-600 rounded-md">Filtrar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {races.map((race) => (
          <Card key={race.id} className="bg-gray-100 border-none shadow-none dark:bg-trueGray-800">
            <CardHeader>
              <Image
                src={race.image}
                alt={race.title}
                width={300}
                height={200}
                className="rounded-t-lg h-[200px] object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-gray-800 dark:text-gray-200">{race.title}</CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-300">
                <div className="flex items-center mt-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  {race.date}
                </div>
                <div className="flex items-center mt-2 ">
                  <MapPin className="mr-2 h-4 w-4" />
                  {race.location}
                </div>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-white bg-indigo-600 rounded-md">Acessar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination className="mt-6 flex justify-center">
        <PaginationContent>
          <PaginationItem className="bg-gray-100 rounded-lg dark:bg-trueGray-800">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="bg-gray-100 rounded-lg dark:bg-trueGray-800">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="bg-gray-100 rounded-lg dark:bg-trueGray-800">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="bg-gray-100 rounded-lg dark:bg-trueGray-800">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>


    </Container>
  );
}
