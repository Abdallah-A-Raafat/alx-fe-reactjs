const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      </div>
      <div className="user-info">
        <h3 className="user-login">{user.login}</h3>
        <p className="user-name">{user.name || 'No name provided'}</p>
        <p className="user-bio">{user.bio || 'No bio available'}</p>
        <div className="user-stats">
          <span className="stat">
            <strong>Followers:</strong> {user.followers || 0}
          </span>
          <span className="stat">
            <strong>Following:</strong> {user.following || 0}
          </span>
          <span className="stat">
            <strong>Repos:</strong> {user.public_repos || 0}
          </span>
        </div>
        <div className="user-links">
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
          {user.blog && (
            <a 
              href={user.blog} 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-link"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
