

type Props = {
    icon: string,
    title: string
    info: string | JSX.Element
    description?: string | JSX.Element
  }
const SmallCard = ({ icon, title, info, description }: Props) => {
  return (
    <div className="w-[130px] h-[120px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
    <div className="flex items-center text-sm font-bold">
      <img src={icon} className="w-6 h-6"/> <h4 className="ml-1">{title}</h4>
    </div>
    <h3 className="mt-2 text-lg">{info}</h3>

    <div className="text-xs font-bold">{description}</div>

    </div>
  )
}

export default SmallCard