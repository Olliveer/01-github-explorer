type RepositoryItemProps = {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

export function RepositoryItem({
  repository: { description, html_url, name },
}: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={html_url}>
        Acessar repositório
      </a>
    </li>
  );
}
