import flexionGif from "../assets/flexion.gif";

export default function ExerciseAvatar() {
  return (
    <div className="w-40 h-40 mx-auto mb-6">
      <img src={flexionGif} alt="Flexión animada" className="w-full h-full object-contain" />
    </div>
  );
}
