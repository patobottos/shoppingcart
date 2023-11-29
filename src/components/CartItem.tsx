import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div className="me-auto">
        <div>{item.name}</div>

        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          {formatCurrency(item.price)}
        </div>
        <div>
          <span
            className="text-muted"
            style={{ fontSize: "0.65rem", marginLeft: "0.3rem" }}
          >
            &times; {quantity} {quantity === 1 ? "ud." : "uds."}
          </span>
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
