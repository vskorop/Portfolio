import { tw } from 'twind'

export const info = {
  0: (
    <a className={tw(`flex px-1`)} href="https://github.com/vskorop">
      Click here to see my github!
    </a>
  ),
  2: 'I`m 25 and i living in Moscow. I`m a frontend developer with about 2 years experience. I`m mostly doing React related stuff and a whole lot of other small pieces and libraries of the frontend ecosystem. If you want to see more informations click on this cube.',
  4: 'I spent a lot of time coming up with my drawing style, and now I think I have one. Drawing never felt like work to me, it is something that I enjoy doing.As for my other hobbies, I like climbing and I am a big fan of rocks. I used to spend a lot of time indoor climbing, but now I spend most of my free time outdoor climbing.',
  6: <a href="https://hh.ru/resume/a26c020dff0910d4e20039ed1f5a44614f4250">My resume</a>,
  8: 'Hello! \n My name is Slava, nice to see you here! swipe this cube for more info!',
  10: (
    <div className={tw(`flex px-1 justify-center`)}>
      <a className={tw(`flex px-1`)} href="https://vk.com/prailip">
        <img src="https://cdn-icons-png.flaticon.com/32/145/145813.png" />
      </a>
      <a className={tw(`flex px-1`)} href="t.me/molotka">
        <img src="https://cdn-icons-png.flaticon.com/32/2111/2111646.png" />
      </a>
      <a className={tw(`flex px-1`)} href="https://github.com/vskorop">
        <img src="https://cdn-icons-png.flaticon.com/32/174/174855.png" />
      </a>
    </div>
  )
}
