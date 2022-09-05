import { FaCrown } from "react-icons/fa"
import { programs } from "../data"
import Card from "../UI/Card"
import SectionHead from "./SectionHead"

const Programs = () => {
  return (
      <section className="programs">
         <div className="container programs__container">
            <SectionHead 
               icon={<FaCrown/>}
               title="Programs"
            />
         </div>
         <div className="programs__wrapper">
            {
               programs.map(({id, icon, title, info, path}) => {
                  return (
                     <Card className='programs__program' key={id}>

                     </Card>
                  )
               })
            }
         </div>

      </section>
  )
}

export default Programs