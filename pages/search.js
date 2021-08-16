import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function Search({ searchResult }) {
  console.log(`searchResult`, searchResult);
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  console.log(`router.query`, router.query);
  return (
    <div>
      <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

        <main className="flex">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs">
              300+ Stays • {range} • for {noOfGuests} guests
            </p>

            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stay in {location}
            </h1>

            <div className="hidden lg:inline-flex space-x-4 p-2 mb-5 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
            <div className="flex flex-col">
              {searchResult.map((item, index) => (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  location={item.location}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}