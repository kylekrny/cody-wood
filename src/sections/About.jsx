import Image from "next/image"
import cody from "@/images/cody.jpg"

const people = [
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

export default function About() {
  return (
    <div className="bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-6xl">
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            About
          </h2> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-y-20 lg:max-w-2xl lg:gap-x-8 xl:max-w-5xl"
        >
            <li className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-80 flex-none rounded-2xl object-cover shadow-md"
                src={cody}
                alt=""
              />
              <div className="flex-auto">
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Cody Woods brings a fresh and authentic perspective to the
                  Colorado real estate scene. With an innate understanding of
                  the local market dynamics and a commitment to his clients,
                  Cody has quickly become a sought-after realtor. His
                  straightforward approach prioritizes your needs and goals,
                  ensuring a seamless and stress-free experience. With a genuine
                  passion for helping clients find their ideal properties,
                  Cody's dedication is evident in every step of the process.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Drawing from his deep-rooted knowledge of Colorado's diverse
                  neighborhoods, he is your reliable partner in making informed
                  real estate decisions. Whether you're a first-time buyer or a
                  seasoned investor, Cody's down-to-earth demeanor and expertise
                  make him a standout choice for navigating the exciting journey
                  of buying or selling property in Colorado.`
                </p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}
