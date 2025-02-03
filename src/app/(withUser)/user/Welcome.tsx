const Welcome = ({ userName }: { userName: string | null | undefined }) => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Hey! {userName}, welcome to your Dashboard.
        </h3>
      </div>
    </div>
  );
};

export default Welcome;
