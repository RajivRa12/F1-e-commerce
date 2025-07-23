import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

interface PlaceholderCategoryProps {
  categoryName: string;
}

export default function PlaceholderCategory({ categoryName }: PlaceholderCategoryProps) {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">
            {categoryName.toUpperCase()}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            This category is coming soon! Check out our Tees collection in the meantime.
          </p>
          <Link 
            to="/categories/tees"
            className="inline-flex items-center px-6 py-3 bg-racing-red text-white font-semibold rounded-lg hover:bg-racing-red/90 transition-colors"
          >
            Browse Tees Collection
          </Link>
        </div>
      </div>
    </Layout>
  );
}
