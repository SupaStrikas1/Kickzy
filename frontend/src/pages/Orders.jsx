import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Package,
  Calendar,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadOrderData = async (isRefresh = false) => {
    try {
      if (!token) {
        setLoading(false);
        return null;
      }

      if (isRefresh) {
        setRefreshing(true);
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        const allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            item["orderId"] = order._id;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      if (isRefresh) {
        setRefreshing(false);
      }
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "shipped":
      case "out for delivery":
        return <Truck className="w-4 h-4 text-blue-500" />;
      case "processing":
        return <Clock className="w-4 h-4 text-amber-500" />;
      case "cancelled":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Package className="w-4 h-4 text-slate-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
      case "shipped":
      case "out for delivery":
        return "text-blue-700 bg-blue-50 border-blue-200";
      case "processing":
        return "text-amber-700 bg-amber-50 border-amber-200";
      case "cancelled":
        return "text-red-700 bg-red-50 border-red-200";
      default:
        return "text-slate-700 bg-slate-50 border-slate-200";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-white via-slate-50/50 to-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <Title text1={"MY"} text2={"ORDERS"} />
            </div>
            <div className="space-y-6">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 animate-pulse"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-20 h-20 bg-slate-200 rounded-xl"></div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white via-slate-50/50 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-10">
          {/* Header */}
          <div className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
            <Title text1={"MY"} text2={"ORDERS"} />
          </div>
          <p className="text-center text-sm sm:text-base md:text-base text-slate-600">
            Track and manage all your orders in one place
          </p>

          {/* Orders List */}
          {orderData.length > 0 ? (
            <div className="space-y-6">
              {orderData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-slate-50 rounded-xl overflow-hidden">
                          <img
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            src={item.image[0] || "/placeholder.svg"}
                            alt={item.name}
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                            {item.name.slice(0, 60)}
                            {item.name.length > 60 && "..."}
                          </h3>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">
                                <span className="font-medium text-slate-900">
                                  {formatPrice(item.price)}
                                </span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">
                                Qty:{" "}
                                <span className="font-medium text-slate-900">
                                  {item.quantity}
                                </span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-300 rounded">
                                S
                              </span>
                              <span className="text-slate-600">
                                Size:{" "}
                                <span className="font-medium text-slate-900">
                                  {item.size}
                                </span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600 text-xs sm:text-sm">
                                {new Date(item.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center gap-2 text-sm">
                            <CreditCard className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600">
                              Payment:{" "}
                              <span className="font-medium text-slate-900">
                                {item.paymentMethod}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end lg:text-right">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(item.status)}
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                              item.status,
                            )}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <button
                          onClick={() => loadOrderData(true)}
                          disabled={refreshing}
                          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-200 text-slate-700 font-medium rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <RefreshCw
                            className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
                          />
                          <span>
                            {refreshing ? "Updating..." : "Track Order"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-10">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                No Orders Yet
              </h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                You haven't placed any orders yet. Start shopping to see your
                order history here.
              </p>
              <button
                onClick={() => (window.location.href = "/collection")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
              >
                <span>Start Shopping</span>
                <Package className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
