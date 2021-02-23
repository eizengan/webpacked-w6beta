import avatarUrl from '../images/avatar.png'

window.addEventListener(
  'turbolinks:load',
  () => {
    document.getElementById('add-avatar-button').onclick = () => {
      const image = new Image();
      image.src = avatarUrl;
      document.getElementById('so-many-avatars').appendChild(image);
    }
  }
)
