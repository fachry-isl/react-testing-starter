import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Product Image Gallery Component", () => {
  it("Should not show anything if image url does not exist", () => {
    render(<ProductImageGallery imageUrls={[]} />);
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    // container.firstChild will be null if component returns null
    expect(container.firstChild).toBeNull();
  });

  it("renders list of images when imageUrls is not empty", () => {
    const testUrls = ["url1.jpg", "url2.jpg"];
    render(<ProductImageGallery imageUrls={testUrls} />);
    // Should have <ul> element
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    // Should have list items length equal to testUrls
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(testUrls.length);
    // Each image src should match
    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", testUrls[index]);
    });
  });
});
