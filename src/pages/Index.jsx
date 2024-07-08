import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Top News Section */}
      <section className="mb-8">
        <Card className="mb-4">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          <CardHeader>
            <CardTitle>Featured Article Headline</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Summary of the featured article...</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Secondary Article Headline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Summary of the secondary article...</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Secondary Article Headline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Summary of the secondary article...</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Secondary Article Headline</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Summary of the secondary article...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Market Data</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div>
              <p>Index 1</p>
              <Badge>Value</Badge>
            </div>
            <div>
              <p>Index 2</p>
              <Badge>Value</Badge>
            </div>
            <div>
              <p>Index 3</p>
              <Badge>Value</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sidebar */}
      <aside className="mb-8">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Trending Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Trending Article 1</li>
              <li>Trending Article 2</li>
              <li>Trending Article 3</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Newsletter Signup</CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter your email" />
            <Button className="mt-2">Sign Up</Button>
          </CardContent>
        </Card>
      </aside>

      {/* Footer */}
      <footer className="mt-8">
        <Separator className="mb-4" />
        <div className="flex justify-between">
          <div>
            <p>About Us</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p>Social Media Icons</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;