interface HeaderSectionProps {
  name?: string;
  tagline?: string;
  profilePicture?: string;
}

export default function HeaderSection({
  name,
  tagline,
  profilePicture,
}: HeaderSectionProps) {
  return (
    <header className="border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 flex items-center">
        {" "}
        {/* Added flex and items-center for layout */}
        {profilePicture && ( // Conditionally render image if URL is provided
          <img
            src={profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mr-6 object-cover" // Added styling for circular image
          />
        )}
        <div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4">
            {name || "Your Name"}
          </h1>
          <p className="text-gray-400 text-lg font-light">
            {tagline || "Content Creator & Entrepreneur"}
          </p>
        </div>
      </div>
    </header>
  );
}
