import './BanerBookBlock.css'


export enum BanerType {
    Salary = 'Акція',
    New = 'Новинка',
    Exclusive = 'Ексклюзив',
}


export type BanerProps = {

    textBaner?: BanerType | null
}

export default function BanerBookBlock({ textBaner }: BanerProps) {
    if (!textBaner) return null

    return (
        <section className={`baner_block baner_${textBaner}`}>
            {textBaner}
        </section>
    )
}