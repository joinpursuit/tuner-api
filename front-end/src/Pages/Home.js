import { Image, Stack } from "react-bootstrap";

function Home() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <h1 style={{ alignSelf: "center" }}>Tuner App</h1>
      <Image
        src="https://camo.githubusercontent.com/bac372992c395f13bbe611b2ef3cf30c196f13bf67be9d462d038368bacc7570/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f3454377a427a64654e45746a54685944576e2f67697068792e6769663f6369643d373930623736313134656530336566376638363034393261393038336437376638363139316137626633343030303263267269643d67697068792e6769662663743d67"
        responsive="true"
      />
    </Stack>
  );
}
export default Home;
