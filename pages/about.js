import Head from 'next/head'
import { Fade } from '@mui/material';
import { compiler } from 'markdown-to-jsx';

import markdownOptions from '../components/markdownOptions';

export default function About() {
  return (
    <div className="container">
      <div className={"p-0 m-0 w-screen flex items-center justify-center"}>
        <div>
          <Fade in={true} timeout={1000}>
            <div className={"flex flex-col items-center justify-center max-w-lg mx-auto gap-4 sm:pt-32"}>
              <div className={"flex flex-row flex-wrap items-stretch justify-center gap-4 w-5/6 sm:w-full"}>
              {compiler(`
### Welcome to **'ray schedule**!

\`\`\`javascript
const handleLogin = () => {
    auth.signInWithPopup(provider).then(result => {
        dispatch(setActiveUser({ 
            userName: result.user.displayName, 
            userEmail: result.user.email 
        }));
    })
    .catch(error => {
        console.log(error);
    });
}
\`\`\`

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper quis lectus nulla at volutpat. Amet dictum sit amet justo donec. Est placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque in dictum non consectetur a. Ut lectus arcu bibendum at varius vel pharetra. A iaculis at erat pellentesque adipiscing commodo. A iaculis at erat pellentesque adipiscing commodo elit at. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Consectetur libero id faucibus nisl tincidunt eget. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Tincidunt arcu non sodales neque sodales ut etiam sit. Viverra suspendisse potenti nullam ac tortor vitae purus. Non pulvinar neque laoreet suspendisse. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Sem viverra aliquet eget sit amet. Ac auctor augue mauris augue neque gravida in fermentum.

Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Ut diam quam nulla porttitor. Hendrerit gravida rutrum quisque non tellus orci ac. Quisque non tellus orci ac auctor augue mauris. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. In eu mi bibendum neque egestas congue. Pretium nibh ipsum consequat nisl vel pretium. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vel pharetra vel turpis nunc eget lorem dolor.

Justo donec enim diam vulputate ut pharetra sit. Varius duis at consectetur lorem donec massa sapien. Ultrices tincidunt arcu non sodales neque sodales. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Sed augue lacus viverra vitae. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Venenatis urna cursus eget nunc scelerisque. Eget egestas purus viverra accumsan. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Amet mauris commodo quis imperdiet. Enim sed faucibus turpis in. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.

Sagittis eu volutpat odio facilisis mauris sit. Malesuada nunc vel risus commodo. Porta non pulvinar neque laoreet. Lacus vel facilisis volutpat est velit egestas dui id. At urna condimentum mattis pellentesque. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sapien faucibus et molestie ac feugiat. Aliquam ultrices sagittis orci a. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pellentesque adipiscing commodo elit at imperdiet. Velit scelerisque in dictum non consectetur a erat nam at. Enim ut sem viverra aliquet eget sit amet tellus. In massa tempor nec feugiat nisl pretium fusce id. Mauris in aliquam sem fringilla ut morbi tincidunt. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Vulputate ut pharetra sit amet aliquam id diam maecenas. Morbi tincidunt ornare massa eget egestas.

Nibh sit amet commodo nulla facilisi nullam vehicula. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Sapien faucibus et molestie ac feugiat sed. Scelerisque purus semper eget duis. Vestibulum morbi blandit cursus risus at. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Odio facilisis mauris sit amet massa vitae tortor. Lectus proin nibh nisl condimentum. Tincidunt eget nullam non nisi. Sit amet mauris commodo quis imperdiet. Gravida in fermentum et sollicitudin. Praesent elementum facilisis leo vel fringilla. Amet consectetur adipiscing elit ut aliquam. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Mauris augue neque gravida in fermentum et. Sed velit dignissim sodales ut eu.              `, markdownOptions)}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}