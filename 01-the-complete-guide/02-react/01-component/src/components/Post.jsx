const names = ["Max", "John"];

function Post() {
  const chosendName = Math.random() > 0.5 ? names[0] : names[1];
  console.log(chosendName);

  return (
    <div>
      <p>{chosendName}</p>
      <p>Post Content</p>
    </div>
  );
}

export default Post;
