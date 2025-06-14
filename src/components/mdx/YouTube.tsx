//components/mdx/YouTube.tsx
// from https://gaudion.dev/blog/mdx-youtube-embed
export default function YouTube ({ id } : { id : string }){
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embed/" + id + "?autoplay=1&loop=1"}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
      ></iframe>
    </div>
  );
};