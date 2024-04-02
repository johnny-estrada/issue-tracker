/// <reference types="vite/client" />

declare module "cloudinary-react" {
  interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    publicId: string;
    cloudName: string;
  }

  export class Image extends React.Component<ImageProps, object> {}
}
