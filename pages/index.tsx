import bids from "../public/data/dummy-bids.json";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>입찰공고 리스트</h1>
      <ul style={{ marginTop: 20 }}>
        {bids.map((b) => (
          <li key={b.bidNtceNo} style={{ marginBottom: 12 }}>
            <strong>{b.bidNtceNm}</strong> <br />
            기관: {b.dminsttNm} / 마감: {b.bidClseDt}
          </li>
        ))}
      </ul>
    </main>
  );
}
