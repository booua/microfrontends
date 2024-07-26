import { FiImage } from 'react-icons/fi';

const MainHeaderTemplate = (props: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-5">
      <div className="row-auto flex gap-3 text-2xl">
        <div className="flex h-10 w-24 items-center justify-center rounded-3xl border-2 border-slate-300 bg-slate-200">
          <FiImage size={24} className="text-slate-400" />
        </div>
        <div className="content-center text-center text-sm font-semibold">
          {props.title}
        </div>
        <div className="content-center text-center text-sm font-semibold">
          {props.subtitle}
        </div>
      </div>
      <div className="flex space-x-4">{props.children}</div>
    </header>
  );
};

export { MainHeaderTemplate };
