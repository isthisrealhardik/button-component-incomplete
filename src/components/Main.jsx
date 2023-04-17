import "../styles/main.css";
import Button from "./Button";

const Main = () => {
    return(
        <div id="Container">
            <h1 id="Heading">Button</h1>
            <div id="flex">
                <Button variant={'default'} />
                <Button variant={'default'} hover={1}/>
            </div>
            <div id="flex">
                <Button variant={'outline'}/>
                <Button variant={'outline'} hover={1} />
            </div>
            <div id="flex">
                <Button variant={'text'} />
                <Button variant={'text'} hover={1} />
            </div>
            <div id="flex">
                <Button disableShadow />
            </div>
            <div id="flex">
                <Button disabled />
                <Button variant={'text'} disabled />
            </div>
        </div>
    )
}

export default Main;