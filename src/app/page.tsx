import { Imgchanger } from "@/components/Imgchanger";
import { ModeToggle } from "@/components/ModeToggle";
import { createClient } from "./utils/supabase/client";

const Home = async () => {
  const supabase = createClient();

  // Todoのリストを取得
  const { data: animals, error } = await supabase
    .from("animal_history")
    .select();

  const human = animals?.filter((animal) => animal.type === "human") || [];
  const humansort = human.sort((a, b) => a.id - b.id);
  const bird = animals?.filter((animal) => animal.type === "bird") || [];

  // エラーが発生した場合
  if (error) {
    return <div>Todoの取得でエラーが発生しました</div>;
  }

  return (
    <div>
      <div className="mt-3 flex justify-center">
        <ModeToggle />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center">
        <Imgchanger Lists={humansort} folder="human" />
        <Imgchanger Lists={bird} folder="bird" />
      </div>
    </div>
  );
};

export default Home;
