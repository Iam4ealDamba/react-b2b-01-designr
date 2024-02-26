declare global {
  namespace JSX {
    interface IntrinsicElements {
      ImageShaderMaterial: ReactThreeFiber.Object3DNode<
        ImageShaderMaterial,
        typeof ImageShaderMaterial
      >;
    }
  }
}
