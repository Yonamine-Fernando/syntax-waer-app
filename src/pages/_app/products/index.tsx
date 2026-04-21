import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container'>
        <h1 className='text-black'>Olá Mundo!!!!</h1>
        <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis mollitia doloremque nihil eum atque quas consequuntur fugit perferendis similique. Magnam suscipit blanditiis explicabo dignissimos dolor ipsa tempora, magni fugit.
        Quibusdam reprehenderit a delectus rerum, dignissimos dolore id voluptatum, necessitatibus eos, repellendus velit dicta! Rem, labore? Voluptas expedita repellendus minima quisquam ab, sint maxime cupiditate deleniti maiores, accusantium consequatur pariatur!
        Laudantium est sit dolore id natus magni voluptatem recusandae aperiam voluptas nobis omnis, libero, ratione incidunt quisquam perspiciatis consequatur nam praesentium, quas fugit numquam ipsum quis rem. Libero, laboriosam eveniet!
        Sed molestiae magnam, suscipit praesentium incidunt tempore! Pariatur deserunt ea, repudiandae deleniti necessitatibus ducimus in soluta nesciunt rem nostrum illo impedit provident quaerat nemo animi cumque culpa aspernatur! Sint, id!
        Veritatis aut sed ab debitis unde officiis quod consequatur animi sapiente eos! Autem sunt nam distinctio quas magni inventore perferendis reprehenderit facere error adipisci, ipsam tenetur atque necessitatibus molestias illum.</p>
        <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis mollitia doloremque nihil eum atque quas consequuntur fugit perferendis similique. Magnam suscipit blanditiis explicabo dignissimos dolor ipsa tempora, magni fugit.
        Quibusdam reprehenderit a delectus rerum, dignissimos dolore id voluptatum, necessitatibus eos, repellendus velit dicta! Rem, labore? Voluptas expedita repellendus minima quisquam ab, sint maxime cupiditate deleniti maiores, accusantium consequatur pariatur!
        Laudantium est sit dolore id natus magni voluptatem recusandae aperiam voluptas nobis omnis, libero, ratione incidunt quisquam perspiciatis consequatur nam praesentium, quas fugit numquam ipsum quis rem. Libero, laboriosam eveniet!
        Sed molestiae magnam, suscipit praesentium incidunt tempore! Pariatur deserunt ea, repudiandae deleniti necessitatibus ducimus in soluta nesciunt rem nostrum illo impedit provident quaerat nemo animi cumque culpa aspernatur! Sint, id!
        Veritatis aut sed ab debitis unde officiis quod consequatur animi sapiente eos! Autem sunt nam distinctio quas magni inventore perferendis reprehenderit facere error adipisci, ipsam tenetur atque necessitatibus molestias illum.</p>
    </div>
  )
}
