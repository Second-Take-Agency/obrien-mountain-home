import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEW_URL = "https://www.google.com/search?sca_esv=74e8f3377864fd67&rlz=1C5CHFA_enUS728US745&sxsrf=ANbL-n7UgaPHvavVES-m6lEIry-6SmE-9A:1777356252313&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZTvVM5PaVLzhzJpKO79EzuxiO52v24AJvDBjzF3948BH3gafAW29oU3SWzyHqIzrWDz60J3wx2ZCpG7LVY54RBOedUrxrfi8RFUNu6nAXs5jb4oDUjKcpy9Z9YACnRQK2A-N58%3D&q=Obrien+Mountain+Home+Decking+and+Siding+Reviews&sa=X&ved=2ahUKEwjgybuA8I-UAxVEoisGHa6pPUsQ0bkNegQIIRAH&biw=1710&bih=982&dpr=2";
const GOOGLE_PROFILE_URL = "https://www.google.com/search?sca_esv=74e8f3377864fd67&rlz=1C5CHFA_enUS728US745&sxsrf=ANbL-n7UgaPHvavVES-m6lEIry-6SmE-9A:1777356252313&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZTvVM5PaVLzhzJpKO79EzuxiO52v24AJvDBjzF3948BH3gafAW29oU3SWzyHqIzrWDz60J3wx2ZCpG7LVY54RBOedUrxrfi8RFUNu6nAXs5jb4oDUjKcpy9Z9YACnRQK2A-N58%3D&q=Obrien+Mountain+Home+Decking+and+Siding+Reviews&sa=X&ved=2ahUKEwjgybuA8I-UAxVEoisGHa6pPUsQ0bkNegQIIRAH&biw=1710&bih=982&dpr=2";

const reviews = [
  {
    name: "Sarah T.",
    location: "Redding, CA",
    rating: 5,
    date: "2024",
    text: "Marcus and his team were professional from start to finish. They fire hardened our home near Shasta Lake and replaced the vents with Vulcan vents. Clear communication the whole way through. Highly recommend for anyone in wildfire country."
  },
  {
    name: "Dave M.",
    location: "Chico, CA",
    rating: 5,
    date: "2024",
    text: "We had our deck rebuilt and new siding installed. The crew was clean, on time, and the work was done right. Marcus walked through everything with us before and after. Great local contractor."
  },
  {
    name: "Linda R.",
    location: "Paradise, CA",
    rating: 5,
    date: "2024",
    text: "After the Camp Fire we needed to rebuild with fire-resistant materials. O'Brien Mountain Home understood exactly what we needed and installed fiber cement siding and ember-resistant vents. We finally feel safe in our home again."
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-slate-300'}`}
      />
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <GoogleIcon />
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Google Reviews</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Homeowners Are Saying</h2>
            <div className="flex items-center gap-3 mt-2">
              <StarRating rating={5} />
              <span className="text-slate-600 text-sm font-medium">5.0 · Verified Google Reviews</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-slate-900 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-primary/90 transition-colors"
            >
              <Star className="w-4 h-4" />
              Leave a Review
            </a>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-full text-sm hover:border-primary hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View All Reviews
            </a>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              {/* Stars + Google badge */}
              <div className="flex items-center justify-between">
                <StarRating rating={review.rating} />
                <div className="flex items-center gap-1.5">
                  <GoogleIcon />
                  <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                </div>
              </div>

              {/* Review text */}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            Real reviews from real Northern California homeowners. No fake testimonials, ever.
            {' '}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Share your experience →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
