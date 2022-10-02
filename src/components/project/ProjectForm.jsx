export default function ProjectFrom() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira um nome para o projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira um orçamento para o projeto" />
            </div>
            <div>
                <select name="category_id">
                    <option disable selected>Selecione a categoria do projeto</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}