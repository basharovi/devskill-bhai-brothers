export default function ImagePlaceholder({ 
  text,
  className = "h-64",
  textColor = "text-gray-500 dark:text-gray-400",
  bgColor = "bg-gray-200 dark:bg-gray-700"
}: {
  text: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
}) {
  return (
    <div className={`${bgColor} ${className} rounded-lg flex items-center justify-center`}>
      <p className={textColor}>{text}</p>
    </div>
  );
} 