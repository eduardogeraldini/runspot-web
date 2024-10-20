import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "./Container";

export const Footer = () => {
    return (
        <Container className="pb-0">
            <div className="grid grid-cols-1 gap-10 pt-10 mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                        >
                            <Image
                                src="./logo.svg"
                                alt="N"
                                width="32"
                                height="32"
                                className="w-8"
                            />
                            <span>RunSPOT</span>
                        </Link>
                    </div>

                    <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                        Runspot é uma plataforma que centraliza informações sobre corridas de rua, permitindo que você encontre eventos de forma rápida e fácil.
                    </div>
                </div>
            </div>

            <div className="mt-10 text-sm text-center text-gray-600 dark:text-gray-400">
                Feito com ♥ por Eduardo Geraldini
            </div>
        </Container>
    );
}
