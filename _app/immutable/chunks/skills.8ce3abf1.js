import{A as e}from"./UIcon.d632e309.js";const g=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function p(t,...n){const r=Object.assign({},t);return Object.keys(r).forEach(i=>{n.includes(i)&&delete r[i]}),r}const a=t=>t,u=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],o=t=>{const n=p(t,"category");return t.category&&(n.category=u.find(r=>r.slug===t.category)),n},c=[o({slug:"js",color:"yellow",description:"Modern JavaScript (ES6+) for building interactive and dynamic web applications with clean, maintainable code.",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"TypeScript for type-safe, scalable applications with improved developer experience and code reliability.",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"java",color:"orange",description:"Java for building robust, scalable applications with strong OOP principles and extensive ecosystem.",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"python",color:"blue",description:"Python for backend development, AI/ML, and scripting with FastAPI for modern async web frameworks.",logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"css",color:"blue",description:"CSS3 for responsive, accessible, and beautifully styled web applications with modern layout techniques.",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"HTML5 for semantic, accessible markup that forms the foundation of modern web applications.",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"sass",color:"pink",description:"Sass for more powerful and maintainable stylesheets with variables, nesting, and mixins.",logo:e.Sass,name:"Sass",category:"markup-style"}),o({slug:"tailwind",color:"cyan",description:"Tailwind CSS for rapid UI development with utility-first CSS and consistent design systems.",logo:e.Tailwind,name:"Tailwind CSS",category:"markup-style"}),o({slug:"reactjs",color:"cyan",description:"React for building dynamic, component-based user interfaces with efficient rendering and state management.",logo:e.ReactJs,name:"React",category:"library"}),o({slug:"nextjs",color:"black",description:"Next.js for full-stack React applications with SSR, SSG, API routes, and optimized performance.",logo:e.Vite,name:"Next.js",category:"framework"}),o({slug:"svelte",color:"orange",description:g,logo:e.Svelte,name:"Svelte",category:"library"}),o({slug:"nodejs",color:"green",description:"Node.js for building fast, scalable backend services with JavaScript runtime.",logo:e.NodeJs,name:"Node.js",category:"framework"}),o({slug:"fastapi",color:"teal",description:"FastAPI for building modern, high-performance Python APIs with automatic documentation.",logo:e.FastApi,name:"FastAPI",category:"framework"}),o({slug:"supabase",color:"green",description:"Supabase for open-source Firebase alternative with PostgreSQL backend and real-time features.",logo:e.PostgreSQL,name:"Supabase",category:"db"}),o({slug:"postgresql",color:"blue",description:"PostgreSQL for reliable, feature-rich relational database management.",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),o({slug:"firebase",color:"orange",description:"Firebase for real-time databases, authentication, and cloud services.",logo:e.Firebase,name:"Firebase",category:"db"}),o({slug:"sql",color:"red",description:"SQL for querying and managing relational databases efficiently.",logo:e.PostgreSQL,name:"SQL",category:"db"}),o({slug:"git",color:"orange",description:"Git for version control and collaborative development workflows.",logo:e.Git,name:"Git",category:"devtools"}),o({slug:"github",color:"black",description:"GitHub for repository hosting, collaboration, and CI/CD pipelines.",logo:e.GitHub,name:"GitHub",category:"devtools"}),o({slug:"vscode",color:"blue",description:"VS Code for modern, powerful code editing and development environment.",logo:e.VsCode,name:"VS Code",category:"devtools"}),o({slug:"vercel",color:"black",description:"Vercel for deploying and hosting modern web applications with optimal performance.",logo:e.Vercel,name:"Vercel",category:"devtools"}),o({slug:"cicd",color:"purple",description:"CI/CD Pipelines for automated testing, building, and deployment workflows.",logo:e.Docker,name:"CI/CD Pipelines",category:"devops"}),o({slug:"linux",color:"orange",description:"Linux and Bash for command-line development and server management.",logo:e.Linux,name:"Linux/Bash",category:"devtools"})],y="Skills",b=(...t)=>c.filter(n=>t.includes(n.slug)),f=t=>{const n=[],r=[];return c.forEach(i=>{if(t.trim()&&!i.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!i.category){r.push(i);return}let s=n.find(d=>{var l;return d.category.slug===((l=i.category)==null?void 0:l.slug)});s||(s={items:[],category:i.category},n.push(s)),s.items.push(i)}),r.length!==0&&n.push({category:{name:"Others",slug:"others"},items:r}),n};export{f as a,b as g,c as i,y as t};
