import Image from 'next/image'

interface CommentProps {
  name: string
  comment: string
  imgSrc: string
}

interface CommentsProps {
  items: CommentProps[]
}

const Comments = ({ items }: CommentsProps) => {
  const total = items.length
  return (
    <div data-id="comments" className="max-w-[780px] m-auto">
      <div className="flex flex-col gap-[15px] border-[2.32px] border-[#E5E5E5]/10 bg-white px-[20.85px] py-[30px] shadow-lg lg:gap-[30px] lg:px-[52.8px] lg:py-[40px]">
        <p className="f-helvetica-bold text-[18px] font-[700] capitalize leading-[21.25px] text-[#000000]">
          {total} comments
        </p>
        <hr className="h-[1.32px] w-full bg-[#2D394C1A]/10" />
        <div className="flex flex-col gap-[16px] lg:gap-[20px]">
          {items.map((comment, index) => (
            <Comment
              key={index}
              name={comment.name}
              comment={comment.comment}
              imgSrc={comment.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Comment = ({ name, comment, imgSrc }: CommentProps) => {
  return (
    <div className="flex flex-row gap-[9.1px] lg:gap-[13.2px]">
      <div className="relative h-[44.35px] min-w-[44.35px] bg-[#2D394C1A] lg:h-[63.36px] lg:min-w-[63.36px]">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="aspect-square object-cover"
          quality={50}
        />
      </div>
      <div className="flex flex-col gap-[7.7px] lg:gap-[12.6px]">
        <p className="f-helvetica-bold text-[15.84px] font-[700] leading-[18.21px] text-[#385898]">
          {name}
        </p>
        <p className="f-helvetica text-[15.84px] font-[400] leading-[21.52px] text-[#000000]">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default Comments
