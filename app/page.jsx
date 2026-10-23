import React, { Suspense } from 'react';
import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { connection } from 'next/server';
import { thrashBurn } from "@/app/fonts";

{/* CSS Imports*/}
import '@/styles/hero.css'

{/* Component imports */}
import Header from "@/components/Header";

const heroImages = fs
    .readdirSync(path.join(process.cwd(), "public/images/hero"))
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .map((f) => `/images/hero/${f}`);

async function HeroImage() {
    await connection();
    const src = heroImages[Math.floor(Math.random() * heroImages.length)];

    return (
        <div className="hero-image">
            <Image
                src={src}
                alt="Skater mid-trick"
                fill
                priority
                sizes="(max-width: 820px) 100vw, 438px"
            />
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-copy">
                    <div className={`${thrashBurn.className} hero-shout`}>
                        <h2>No Fear!</h2>
                        <h2>No Overthinking!</h2>
                        <h2>
                            <span className="line">Just Go Skating!</span>
                        </h2>
                    </div>

                    <p className="hero-strip">
                        Slam.com - a way for skaters to learn, connect and explore
                    </p>

                    <Link href="/tricks" className="hero-cta">
                        Start Skating
                    </Link>
                </div>

                <Suspense fallback={<div className="hero-image" />}>
                    <HeroImage />
                </Suspense>
            </section>
        </div>
    );
}
