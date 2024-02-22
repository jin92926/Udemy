import Input from "./Input";

const NewProject = () => {
  return (
    //테일윈드 특별구문으로 맞춤값 사용가능
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        {/* 대괄호 열고 true 넣을 필요 없이 이렇게만 셋팅해도 true */}
        <Input label="Description" textarea />
        <Input label="Title" />
      </div>
    </div>
  );
};

export default NewProject;
