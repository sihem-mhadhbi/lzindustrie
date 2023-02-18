const File = () => {
  return (
    <form method="POST" action="/api/uploadfile" encType="multipart/form-data">
      <input type="file" name="myFile" />
      <input type="submit" />
    </form>
  );
};
export default File;
