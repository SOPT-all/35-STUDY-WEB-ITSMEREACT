export default function Form({ status }) {
  if (status === "success") {
    return <h1>정답입니다!</h1>;
  }
  return (
    <form>
      <textarea disabled={status === "submitting"} />
      <br />
      <button disabled={status === "empty" || status === "submitting"}>
        Submit
      </button>
      {status == "error" && <p className="Error">좋은 생각이지만 틀렸어요!</p>}
    </form>
  );
}
