"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const posts = [
    {
      image: "/images/blog/blog1.jpg",
      category: "Wellness",
      date: "March 15, 2025",
      author: "Admin",
      title: "Swimming Health Benefits",
      excerpt:
        "Discover the amazing health benefits of swimming and how our infinity pool can enhance your wellness journey during your stay.",
    },
    {
      image: "/images/blog/blog2.jpg",
      category: "Travel Tips",
      date: "March 12, 2025",
      author: "Admin",
      title: "Best Booking Service Tips",
      excerpt:
        "Learn insider tips for getting the best deals and making the most of your luxury hotel booking experience with our expert advice.",
    },
    {
      image: "/images/blog/blog1.jpg",
      category: "Interior Design",
      date: "March 10, 2025",
      author: "Admin",
      title: "Hotel Bedroom Collection",
      excerpt:
        "Take a behind-the-scenes look at our carefully curated bedroom collections and the luxury amenities that make each stay special.",
    },
  ];

  return (
    <section id="blog" className="bg-white py-12">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <div>
            <p className="text-yellow-600 font-semibold mb-3 tracking-wider uppercase text-sm">
              LATEST BLOG
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)]"
              style={{ fontWeight: 700 }}
            >
              News & Update
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex items-center gap-2 hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-600 transition-all"
          >
            <Link href="#">
              View All Posts
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-white"
            >
              <CardHeader className="p-0 relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-600 text-white hover:bg-yellow-700 shadow-lg">
                  {post.category}
                </Badge>
              </CardHeader>

              <CardContent className="p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={16} />
                    <span>By {post.author}</span>
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h4>

                <p className="text-sm md:text-base text-gray-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium group/link"
                >
                  Read More
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <Link href="#">
              View All Posts
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
