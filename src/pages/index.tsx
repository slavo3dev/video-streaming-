import { CardSection } from "src/components/index";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="lg:absolute lg:inset-y-0 " >
      </div>
      <CardSection />
      <CardSection />
      <CardSection />
    </div>
  );
}
