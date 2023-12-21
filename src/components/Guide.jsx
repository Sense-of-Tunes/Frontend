import GuideItems from "./GuideItems"
import GuideItems2 from "./GuideItems2"
import GuideItems3 from "./GuideItems3"

const Guide = () => {
  return (
    <div>
    <div className="container grid grid-cols-1 items-center justify-center mx-auto  ">
    <h1 className="flex items-center justify-center mx-auto font-serif text-[#4D1354] text-5xl mt-2 mb-2">
      Duygularınla Müziği Keşfet!
    </h1>
      </div>
    <div className="container mx-auto p-4 grid grid-cols-3 gap-10 mb-8 mt-4">
      <GuideItems/>
      <GuideItems2/>
      <GuideItems3/>
      
    </div>
    </div>
  )
}

export default Guide
